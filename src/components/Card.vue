<template>
  <div class="kanban-card card" :class="`kanban-card-${task.status}`">
    <header class="kanban-card-header card-header">
      <p class="kanban-card-header-title card-header-title">
        {{ task.title }}
      </p>
      <a @mouseover="changeTrash('empty')"
        @mouseout="changeTrash('')"
        @click.prevent="deleteTask"
        class="kanban-card-header-icon card-header-icon">
        <b-tooltip label="Delete task" animated type="is-danger">
          <span class="card-delete">
            <b-icon :icon="trash"></b-icon>
          </span>
        </b-tooltip>
      </a>
    </header>
    <div class="kanban-card-content card-content">
      <a @click.prevent="openTaskDetail" class="link-layer"></a>
      <div class="content">
        <p><strong>Points: </strong> {{ task.points }}</p>
        <p><strong>Assigned To: </strong> {{ task.assignedTo }}</p>
      </div>
    </div>
    <footer class="kanban-card-footer card-footer">
      <a
        @click.prevent="clickLeftArrow"
        :class="{ disabled: !showLeftArrow }"
        class="card-left card-footer-item">
        <b-icon icon="arrow-left-thick"></b-icon>
      </a>
      <a
        @click.prevent="clickRightArrow"
        :class="{ disabled: !showRightArrow }"
        class="card-right card-footer-item">
        <b-icon icon="arrow-right-thick"></b-icon>
      </a>
    </footer>
  </div>
</template>

<script>
import TaskDetail from '@/components/TaskDetail'
import { db } from '@/firebase'

export default {
  name: 'Card',
  data () {
    return {
      trash: 'delete'
    }
  },
  props: {
    task: Object,
    required: true
  },
  firebase: {
    tasks: {
      source: db.ref('tasks'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  computed: {
    showLeftArrow () {
      return this.task.status > 0
    },
    showRightArrow () {
      return this.task.status < 3
    }
  },
  methods: {
    changeTrash (status) {
      if (status === 'empty') {
        this.trash = 'delete-empty'
      } else {
        this.trash = 'delete'
      }
    },
    clickLeftArrow () {
      let newStatus = this.task.status - 1
      if (newStatus < 0) newStatus = 0
      this.$firebaseRefs.tasks.child(this.task['.key']).child('status').set(newStatus)
    },
    clickRightArrow () {
      let newStatus = this.task.status + 1
      if (newStatus > 3) newStatus = 3
      this.$firebaseRefs.tasks.child(this.task['.key']).child('status').set(newStatus)
    },
    deleteTask () {
      this.$dialog.confirm({
        title: 'Deleting account',
        message: 'Are you sure you want to <b>delete</b> this task? This action cannot be undone.',
        confirmText: 'Delete Task',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$firebaseRefs.tasks.child(this.task['.key']).remove()
          this.$toast.open({
            duration: 1500,
            message: 'Successfully deleted task',
            type: 'is-success'
          })
        }
      })
    },
    openTaskDetail () {
      this.$modal.open({
        parent: this,
        component: TaskDetail,
        hasModalCard: true,
        props: {
          task: this.task
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$backlog: #d32f2f;
$to-do: #ff8f00;
$in-progress: #00acc1;
$done: #388e3c;

.disabled {
  pointer-events: none;
  opacity: 0;
  text-decoration: none;
}

.link-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.kanban-card {
  transition: all .3s;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &-content {
    position: relative;
  }

  border-radius: 5px;

  &:hover &-content {
    background-color: #e1f5fe;
  }

  &:hover .card-delete {
    opacity: 1;
  }

  .card-delete {
    opacity: 0;
    transition: opacity .2s;
    color: red;
  }
  .card-header {
    border-bottom: 1px solid #bdbdbd;
  }

  .card-left {
    border-radius: 0 0 0 5px;
  }

  .card-right  {
    border-radius: 0 0 5px 0;
  }

  .card-left, .card-right {

    &,
    &:link,
    &:visited {
      text-decoration: none;
      transition: all .2s;
    }

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 .5rem 1rem rgba(#000,.2);
    }

    &:active,
    &:focus {
      transform: translateY(-.5px);
      box-shadow: 0 .25rem 5rem rgba(#000, .2);
    }
  }
}

.kanban-card-0 {
  .card-right {
    background-color: $to-do;
    color: #fff;
  }
}

.kanban-card-1 {
  .card-left {
    background-color: $backlog;
    color: #fff;
  }

  .card-right {
    background-color: $in-progress;
    color: #fff;
  }
}

.kanban-card-2 {
  .card-left {
    background-color: $to-do;
    color: #fff;
  }

  .card-right {
    background-color: $done;
    color: #fff;
  }
}

.kanban-card-3 {
  .card-left {
    background-color: $in-progress;
    color: #fff;
  }
}
</style>
