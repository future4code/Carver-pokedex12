export const goToHome = (navigate) => {
    navigate.push("/")
}

export const goToPokedex = (navigate) => {
    navigate.push("/pokedex")
}

export const goToDetails = (navigate, id) => {
    navigate.push(`/details/${id}`)
}