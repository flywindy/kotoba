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
          <div class="row">
            <div class="front col-4">
              {{ card.front }}
            </div>
            <div class="back col-8">
              {{ card.back }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          id: 1,
          front: '本',
          back: 'ほん'
        },
        {
          id: 2,
          front: '肉',
          back: 'にく'
        },
        {
          id: 3,
          front: 'f3',
          back: 'b3'
        },
        {
          id: 4,
          front: 'f4',
          back: 'b4'
        }
      ]
    }
  }

}
</script>

