<template>
<div class="card" :class="`card-${task.status}`">
  <header class="card-header">
    <p class="card-header-title">
      {{ task.title }}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <p><strong>Points: </strong> {{ task.points }}</p>
      <p><strong>Assigned To: </strong> {{ task.assignedTo }}</p>
    </div>
  </div>
  <footer class="card-footer">
    <a
      @mouseover="changeTrash('empty')"
      @mouseout="changeTrash('')"
      class="card-footer-item">
      <span class="card-delete">
        <b-icon :icon="trash"></b-icon>
        <span>Delete</span>
      </span>
    </a>
    <a class="card-left card-footer-item">
      <b-icon icon="arrow-left-thick"></b-icon>
    </a>
    <a class="card-right card-footer-item">
      <b-icon icon="arrow-right-thick"></b-icon>
    </a>
  </footer>
</div>
</template>

<script>
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
  methods: {
    changeTrash (status) {
      if (status === 'empty') {
        this.trash = 'delete-empty'
      } else {
        this.trash = 'delete'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$backlog: #d32f2f;
$to-do: #ff8f00;
$in-progress: #00acc1;
$done: #388e3c;

.card {
  border-radius: 5px;

  &:hover &-delete {
    opacity: 1;
  }

  &-delete {
    opacity: 0;
    transition: opacity .2s;
    color: red;
  }
  &-header {
    border-bottom: 1px solid #bdbdbd;
  }

  &-left, &-right {
    
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

  &-right {
    background-color: $in-progress;
    color: #fff;
  }
}

.card-0 {
  .card-right {
    background-color: $to-do;
    color: #fff;
  }
}

.card-1 {
  .card-left {
    background-color: $backlog;
    color: #fff;
  }

  .card-right {
    background-color: $in-progress;
    color: #fff;
  }
}

.card-2 {
  .card-left {
    background-color: $to-do;
    color: #fff;
  }

  .card-right {
    background-color: $done;
    color: #fff;
  }
}

.card- {
  .card-left {
    background-color: $in-progress;
    color: #fff;
  }
}
</style>
