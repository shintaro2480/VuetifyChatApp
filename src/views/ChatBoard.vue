<template>

    <v-app>
        <v-main>
            <v-container
                class="py-8 px-6"
                fluid
            >
                <v-row>
                <v-col
                    v-for="card in cards"
                    :key="card"
                    cols="12"
                >
                    <v-card>
                    <v-list lines="two">
                        <v-list-subheader :title="card"></v-list-subheader>

                        <template v-for="(data, index) in messages" :key="index">
                        <v-list-item>
                            <template v-slot:prepend>
                            <v-avatar color="blue"></v-avatar>
                            </template>

                            <v-list-item-subtitle class="message">{{ data.message }}</v-list-item-subtitle>
                        </v-list-item>

                        <!-- <v-divider
                            v-if="index !== 6"
                            :key="`divider-${n}`"
                            inset
                        ></v-divider> -->

                        </template>
                    </v-list>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            <v-textarea
            v-model="body"
                append-icon="mdi-comment"
                class="mx-2 messageButtons"
                label="メッセージを送信する"
                rows="3"
                auto-grow
                >
                    </v-textarea>
                        <v-app class="center">
                <v-container>
                <v-btn @click="submit" class="me-4"  prepend-icon="$edit" :disabled="isInvalid">
                    メッセージを追加
                </v-btn>
                <v-btn @click="clear" prepend-icon="$close">
                    リセット
                </v-btn>
                </v-container>
            </v-app>
        </v-main>
    </v-app>
  </template>
  
  <script>

import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase'; // 初期化したFirestoreインスタンスをインポート


export default {
    //以下のcreatedはライフサイクルフック。
    async created(){
        console.log("created call");
        //右辺は、現在のURLクエリ「user_id」を取得するための関数
        this.user_id = this.$route.query.user_id;
        console.log("user_id", this.user_id);
        this.isInvalid = true;
        //firestoreを呼び出す
        //const chatRef = firebase.firestore().collection("chats");
        //console.log("chatRef", chatRef);
        const chatRef = collection(db, 'chats'); // コレクションを参照
        const chatSnapshot = await getDocs(chatRef); // ドキュメントを取得
        const chatList = chatSnapshot.docs.map(doc => doc.data()); // ドキュメントデータをリストに変換
        console.log(JSON.stringify(chatList, null, 2)); // チャットデータをコンソールに表示
        // this.messages.push(chatList);
        // chatListの内容をmessages配列に追加
      chatList.forEach(chat => {
        this.messages.push({ message: chat.message });
      });

    },
    data: () => ({
        messages: [
            {message: "message 1"},
            {message: "message 2"},
        ],
        body: '',
        user_id:'',
        cards: ['Today'],
        drawer: null,
        links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
        ],
        // invalid:false
    }),
    methods: {
        clear() {
            console.log("clear call.")
            this.body = "";
        },
        submit() {
            console.log("submit call" , this.body)
            //以下のようにして、messages
            this.messages.unshift({message: this.body});
            this.body = "";
        }
    },
    computed: {
        isInvalid(){
            //invalidが実行されたら、メッセージ表示
            console.log("invalid call", this.body)
            //もしbodyの中が空だったら、tureを返す
            if(this.body) {
                return false;
            }
            //そうでなければ、falseを返す
            return true;
        }
    }
  }



</script>

<style>
  .center {
    text-align: center;
  }

  .button {
    margin: 5px;
  }

.message{
    text-align: left;
}

</style>