<template>
  <div>
    <div class="row">
      <div class="col">
        <h2 class="h3">Card List</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card mb-3 p-3" v-for="card in cards" :key="card.id">
          <card-list-item :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardListItem from '@/components/CardListItem'

export default {
  components: {
    CardListItem
  },
  data () {
    return {
      cards: [
        {
          id: 1,
          term: '本',
          definition: 'ほん'
        },
        {
          id: 2,
          term: '肉',
          definition: 'にく'
        },
        {
          id: 3,
          term: 'f3',
          definition: 'b3'
        },
        {
          id: 4,
          term: 'f4',
          definition: 'b4'
        }
      ]
    }
  }

}
</script>

