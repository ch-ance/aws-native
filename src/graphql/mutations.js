/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = `mutation CreateAlbum(
  $input: CreateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  createAlbum(input: $input, condition: $condition) {
    id
    name
    pictures {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const updateAlbum = `mutation UpdateAlbum(
  $input: UpdateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  updateAlbum(input: $input, condition: $condition) {
    id
    name
    pictures {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const deleteAlbum = `mutation DeleteAlbum(
  $input: DeleteAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  deleteAlbum(input: $input, condition: $condition) {
    id
    name
    pictures {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const createPicture = `mutation CreatePicture(
  $input: CreatePictureInput!
  $condition: ModelPictureConditionInput
) {
  createPicture(input: $input, condition: $condition) {
    id
    title
    album {
      id
      name
      pictures {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const updatePicture = `mutation UpdatePicture(
  $input: UpdatePictureInput!
  $condition: ModelPictureConditionInput
) {
  updatePicture(input: $input, condition: $condition) {
    id
    title
    album {
      id
      name
      pictures {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const deletePicture = `mutation DeletePicture(
  $input: DeletePictureInput!
  $condition: ModelPictureConditionInput
) {
  deletePicture(input: $input, condition: $condition) {
    id
    title
    album {
      id
      name
      pictures {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    content
    Picture {
      id
      title
      album {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    Picture {
      id
      title
      album {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    content
    Picture {
      id
      title
      album {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
