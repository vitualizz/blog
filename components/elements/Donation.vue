<template lang='pug'>
  a(
  ).donation.button
    p Apóyame con un cafecito
      span  🍵
</template>

<style scoped lang='sass'>
.donation
  width: fit-content
  margin: auto
  border: none
  background-color: #ffffffa1
  display: flex
  p
    font-weight: bold
    color: $black
    letter-spacing: 1px
    line-height: normal
  &:hover
    background-color: $white
</style>
