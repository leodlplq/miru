<template>
    <div class="search-bar">
			<form v-on:submit="onSubmit">
				<input
					type="text"
                    :value="this.search"
					placeholder="Search for an anime (e.g. Naruto)"
					@input="onInput"
				/>
				<button>
					<IconSearch />
				</button>
			</form>
			<button class="search-delete" v-on:click="cleanSearch">
				<IconDelete />
			</button>
		</div>
</template>

<script>

import IconDelete from '@/components/icons/IconDelete'
import IconSearch from '@/components/icons/IconSearch'


export default {
    name: "SearchBar",
    components: {
		IconDelete,
		IconSearch
	},
    props: {
        search: String,
    },
    methods:{
		onSubmit: function() {
			this.$emit("submitForm")
		},
        onInput(event) {
			this.$emit('update:search', event.target.value) 
            this.$emit('inputForm')
		},
        cleanSearch: function() {
			this.$emit('update:search', "")
            this.$emit('inputForm')
		}
  }
};
</script>

<style scoped>
.search-bar {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 16px;
}

.search-bar > form {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.search-bar input {
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	outline: none;
	color: black;
}

.search-bar button {
	background: #307351;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.search-bar > button.search-delete {
	background: #b41c1c;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
}

.search-bar > button:hover {
	cursor: pointer;
}
</style>
