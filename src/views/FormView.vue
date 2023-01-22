<template>
    <div>
        <FormContact id="form" class="active" :contacts="contacts"/>
    </div>
</template>

<script>
import FormContact from '@/components/FormContact.vue'

export default {
    name: 'FormView',
    components: {
        FormContact
    }
}
</script>
<style>
    
</style>