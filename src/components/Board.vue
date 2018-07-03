<template>
  <b-collapse class="board card" :class="`board-${list.type}`">
    <div slot="trigger" slot-scope="props" class="board-header card-header">
        <p class="board-header-title card-header-title">
          {{ formattedType }}
        </p>
        <a class="board-header-icon card-header-icon">
          <b-icon
            :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
        </a>
    </div>
    <div class="board-content card-content">
      <v-card v-for="(task, index) in list.tasks" :key="index" :task="task"></v-card>
    </div>
    <!-- <footer class="board-footer card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
    </footer> -->
  </b-collapse>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Board',
  components: {
    'v-card': Card
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedType () {
      let formatted = this.list.type.replace(/-/g, ' ')
      formatted = formatted.replace(/\b\w/g, (match) => match.toUpperCase())
      return formatted
    }
  },
  methods: {
    check () {
      console.log('hit')
    },
    check2 () {
      console.log('hit2')
    }
  }
}
</script>

<style lang="scss">
$backlog: #d32f2f;
$to-do: #ff8f00;
$in-progress: #00acc1;
$done: #388e3c;

.board {
  border-radius: 8px;

  &-header-title {
    color: #fff;
  }

  &-header-icon {
    color: #fff;
  }
}

.board-backlog {
  border: 1px solid $backlog;

  .board-header {
    background-color: $backlog;
  }
}

.board-to-do {
  border: 1px solid $to-do;

  .board-header {
    background-color: $to-do;
  }
}

.board-in-progress {
  border: 1px solid $in-progress;

  .board-header {
    background-color: $in-progress;
  }
}

.board-done {
  border: 1px solid $done;

  .board-header {
    background-color: $done;
  }
}
</style>
