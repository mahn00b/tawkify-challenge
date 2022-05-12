
export const getList = async () => {
 const res = await fetch('/api/v1/list');

 return await res.json();
}

export const addItem = async (item) => {
 const res = await fetch('/api/v1/list', {
    method: 'POST',
    body: item
  })

  return await res.json();
}

export const deleteItem = async (item) => {
  const res = await fetch('/api/v1/list', {
    method: 'DELETE',
    body: item
  })

  return await res.json();
}
