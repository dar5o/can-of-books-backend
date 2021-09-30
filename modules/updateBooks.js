//missing imports


const updateBooks = async (request, response) => {
  const { title, status, description } = request.body;
  try {
    const updatedBook = await Books.findByIdAndUpdate(request.params.id, {
      title,
      status,
      description,
    });
    const { email } = updatedBook;
    getBooks({ query: { email } }, response);
  } catch (err) {
    response.status(400).json(err);
  }
};