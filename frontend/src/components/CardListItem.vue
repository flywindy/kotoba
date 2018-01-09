<template>
<div class="row">
  <div class="front col-4">
    {{ card.term }}
  </div>
  <div class="back col-8">
    {{ card.definition }}
  </div>
</div>
</template>

<<script>
export default {
  props: {
    card: {
      type: Object
    }
  }
}
</script>

