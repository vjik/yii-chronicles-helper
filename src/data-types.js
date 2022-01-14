let data = {
    'update': {
        icon: '⚡',
        label: 'Обновление',
    },
    'new-package': {
        icon: '✨',
        label: 'Новый пакет',
    },
    'patch-release': {
        icon: '🎁',
        label: 'Патч-релиз',
        tagsAfter: '#ПатчРелиз #Релиз',
    },
    'minor-release': {
        icon: '🎁',
        label: 'Минорный релиз',
        tagsAfter: '#МинорныйРелиз #Релиз',
    },
    'major-release': {
        icon: '🎁',
        label: 'Мажорный релиз',
        tagsAfter: '#МажорныйРелиз #Релиз',
    },
    'first-major-release': {
        icon: '🎁',
        label: 'Первый мажорный релиз',
        tagsAfter: '#ПервыйРелиз #МажорныйРелиз #Релиз',
    },
    'news': {
        icon: '🔥',
        label: 'Новости',
        tagsAfter: '#Новости',
    },
    'recipes': {
        icon: '🍕',
        label: 'Рецепты',
        tagsAfter: '#Рецепты',
    },
};

for (const id in data) {
    data[id].id = id;
}

export const types = data;
export const defaultType = 'update';