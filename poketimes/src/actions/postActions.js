export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id // when property and value are the same, we don't need to write "id: id"
    }
}