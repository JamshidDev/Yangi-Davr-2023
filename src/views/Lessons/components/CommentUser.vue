<template>
  <div class="grid">
    <div class="col-12 xl:px-4">
      <div class="comment_title text-500 text-sm uppercase ">
        Kammentariya chat
      </div>
      <div class="comment_details flex mt-2">
        <div class="comment_btn">
            <Avatar
              image="https://yangidavr.com/uploads/avatar/ed523b9f1f1d5760bf53110234beec7b.jpg"
              class="mr-2"
              shape="circle"
              style="object-fit: cover"
            />
        </div>
        <div class="comment_text" style="width: calc(100% - 60px)">
          <Textarea
            class="w-full"
            v-model.trim="comment_text"
            :autoResize="true"
            rows="1"
            placeholder="Izoh matnini yozing..."
          />
        </div>
        <div class="comment_btn">
          <Button icon="pi pi-send" class="px-4 ml-2" :loading="loading" @click="addComment()" />
        </div>
      </div>


      <div class="comment_container" v-if="commentList.length>0">
        <div class="user_comment p-2 flex mt-2" v-for="comment in commentList" :key="comment.id">
          <div
            class="
              user_info
              flex
              justify-content-start
              mb-2
              align-items-start
              relative
            "
          >
            <Avatar
              :image="comment.user.avatar.url_path"
              class="mr-2"
              shape="circle"
              style="object-fit: cover"
            />
          </div>
          <div class="user_comment_content flex flex-column w-full">
            <div class="flex w-full justify-content-between">
              <span class="font-medium text-blue-400">{{comment.user.login}} <span style="font-size:10px" class="font-medium text-600 text-sm ml-3">{{comment.created_at}} </span></span>
              <span class="comment_action">
                <div class="comment_action_icon" v-show="user_info.id== comment.user.id">
                  <i class="pi pi-user-edit text-blue-500  text-sm mx-2 cursor-pointer"></i>
                  <i class="pi pi-trash text-red-500  text-sm mx-2 cursor-pointer"></i>
                </div>
              </span>
            </div>

            <div class="comment_text text-sm text-left mt-2">
             {{comment.text}}
            </div>
            <div
              class="comment_footer flex w-full justify-content-between pt-4"
            >
              <div class="comment_footer_view text-sm font-bold cursor-pointer">
                Fikrlarni ko'rish <i class="pi pi-reply text-blue-500 ml-2 cursor-pointer"></i>
              </div>
              <div class="comment_footer_view text-sm font-medium text-blue-500 cursor-pointer">
                {{comment.replies_count}} ta izoh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommentService from "@/services/service/CommentService";
export default {
  data() {
    return {
      commentList: [],
      comment_text: null,
      loading:false,
      user_info:JSON.parse(localStorage.getItem('user_info')),
    };
  },
  methods: {
    get_CommentByLessonId(id) {
      CommentService.get_CommentByLessonId({ lesson_id: id })
        .then((res) => {
          console.log(res.data.data);
          this.commentList = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addComment(){
      if(this.comment_text.length>0){
        this.loading = true;
      CommentService.create_Lesson_Comment({data:{
        lesson_id:this.$route.params.id,
        text:this.comment_text,
      }}).then((res) => {
        console.log(res.data);
        this.loading = false;
        this.comment_text = null;
        this.get_CommentByLessonId(this.$route.params.id);
      })
      }
      
    }
  },
  created() {
    this.get_CommentByLessonId(this.$route.params.id);
    console.log(this.user_info);
  },
};
</script>
<style lang="scss" scoped>
.comment_container {
  width: 100%;
//   max-height: 500px;

  overflow-x: hidden;
  overflow-y: auto;
  //   border: 1px solid rgba(41, 40, 40, 0.052);
}
// .comment_container::-webkit-scrollbar{
//     width: 20px;
// }
.user_comment_content {
  background-color: rgba(65, 121, 225, 0.258);
  border-radius: 10px;
  padding: 10px 20px;
}
</style>