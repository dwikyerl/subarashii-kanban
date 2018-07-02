<template>
  <div class="home">
    <v-header></v-header>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
          <div
            class="column is-6-tablet is-6-desktop is-3-widescreen"
            v-for="(list, index) in taskLists"
            :key="index">
            <v-board :list="list"></v-board>
          </div>
        </div>
      </section>
    </div>
    <button @click="this.openForm" class="fab button is-success is-large">
      <b-icon icon="plus"></b-icon>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import cloneDeep from 'lodash.clonedeep'
import Header from '@/components/Header'
import Board from '@/components/Board'
import ModalForm from '@/components/ModalForm'

export default {
  name: 'home',
  components: {
    'v-header': Header,
    'v-board': Board
  },
  data () {
    return {
      modes: [
        { type: 'backlog', tasks: [] },
        { type: 'to-do', tasks: [] },
        { type: 'in-progress', tasks: [] },
        { type: 'done', tasks: [] }
      ],
      tasks: [
        {
          title: 'Makan pagi',
          points: 100,
          description: 'Makan bubur',
          assignedTo: 'Mahmud',
          status: 0
        },
        {
          title: 'Minum air',
          points: 190,
          description: 'Minum saja',
          assignedTo: 'Soleh',
          status: 2
        }
      ]
    }
  },
  computed: {
    taskLists () {
      const taskLists = cloneDeep(this.modes)
      this.tasks.forEach((task) => {
        taskLists[task.status].tasks.push(task)
      })
      return taskLists
    }
  },
  methods: {
    openForm () {
      this.$modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true
      })
    }
  }
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  background-color: #209cee;
}

.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &,
  &:link,
  &:visited {
    text-decoration: none;
    border-radius: 50%;
    transition: all .2s;

    //Change for the <button> element
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 0 .25rem .5rem rgba(#000,.2);
  }

  &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(#000,.2);

      &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      }
  }

  &:active,
  &:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 .5rem 1rem rgba(#000,.2);
  }
}
</style>
