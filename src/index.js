import Vue from 'vue';

import VueSelect from 'vue-select/dist/vue-select';
import 'vue-select/dist/vue-select.css';

import './bulma.sass';

import {packages} from './data-packages';
import {types, defaultType} from './data-types';

new Vue({
    el: document.getElementById('App'),
    data: {
        types: types,
        selectedType: defaultType,
        selectedPackages: [],
    },
    computed: {
        packagesOptions() {
            return Object.values(packages);
        },
        message() {
            let tags = [],
                lines = [],
                type = this.types[this.selectedType];

            this.selectedPackages.forEach(function(item) {
                tags.push(item.tag);
                lines.push(item.label + ' ' + item.url);
            });

            if (typeof type.tagsAfter !== 'undefined') {
                tags.push(type.tagsAfter);
            }

            return type.icon
                + (tags.length ? ' ' + tags.join(' ') : '')
                + (lines.length ? '\n\n' + lines.join('\n') : '');
        },
    },
    methods: {
        copy() {
            this.$refs.message.select();
            document.execCommand('copy');
        },
    },
    components: {
        VueSelect,
    },
});