<template>
    <div>
        <div v-if="loading">
            Data is loading
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                <div class="col" v-for="(bookable, column) in bookablesInRow(row)" :key="'row' + row + column">
                    <bookable-list-item
                    :title="bookable.title"
                    :content="bookable.content"
                    :price="1000"></bookable-list-item>
                </div>
                <div class="col" v-for="p in placeHoldersInRow(row)" :key="'placeholder' + row + p"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BookableListItem from './BookableListItem.vue';
export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3
        }
    },
    // computed properties
    computed: {
        rows() {
            return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns);
        }
    },
    // Methods called explicity
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice((row - 1) * this.columns, row * this.columns);
        },
        placeHoldersInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
        }
    },
    //Life cycle hook
    created() {
        this.loading = true;
        setTimeout(() => {
            this.bookables = [
            {
                title: "Cheap Villa",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 2",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 3",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 4",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 5",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 6",
                content: "This is a cheap villa"
            },
            {
                title: "Cheap Villa 7",
                content: "This is a cheap villa"
            }
            ];
            this.loading = false;
        }, 2000);
    }
}
</script>
