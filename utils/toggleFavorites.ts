export const toggleFavorites = (id: number) =>{

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)){
        favorites = favorites.filter(favId => favId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const existInFavorites = (id: number): boolean => {

    if(typeof window === 'undefined') return false;

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)
}

export const pokemonList = (): number[] =>{

    if(typeof window === 'undefined') return [];

    let pokemonsList: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    return pokemonsList
}