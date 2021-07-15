<template>
    <header :class="$style.header">
        <div class="container">
            <div class="d-flex">

                <nuxt-link :class="$style.mylogo" to="/">Where in the world?</nuxt-link>
                <SwitchMode />

            </div>
        </div>
    </header>
</template>


<style lang="scss" module>
@import './styles.scss';
</style>
