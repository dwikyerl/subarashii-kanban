<template>
  <div class="task-detail">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Task Detail</p>
      </header>
      <section class="modal-card-body">
         <b-field label="Title:">
          <p>{{ task.title }}</p>
         </b-field>

         <b-field label="Description:">
          <p style="white-space: pre-wrap;">{{ task.description }}</p>
         </b-field>

         <b-field label="Status: ">
          <p>{{ taskStatus }}</p>
         </b-field>

         <b-field label="Points: ">
          <p>{{ task.points }}</p>
         </b-field>

         <b-field label="Assigned To: ">
          <p>{{ task.assignedTo }}</p>
         </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  props: {
    task: Object
  },
  computed: {
    taskStatus () {
      switch (this.task.status) {
        case 0:
          return 'Backlog'
        case 1:
          return 'To Do'
        case 2:
          return 'In Progress'
        case 3:
          return 'Done'
      }
    }
  }
}
</script>

<style lang="scss">
.task-detail {
  min-width: 50vw;
}
</style>
