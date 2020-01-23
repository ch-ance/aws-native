/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = `subscription OnCreateAlbum {
  onCreateAlbum {
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
export const onUpdateAlbum = `subscription OnUpdateAlbum {
  onUpdateAlbum {
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
export const onDeleteAlbum = `subscription OnDeleteAlbum {
  onDeleteAlbum {
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
export const onCreatePicture = `subscription OnCreatePicture {
  onCreatePicture {
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
export const onUpdatePicture = `subscription OnUpdatePicture {
  onUpdatePicture {
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
export const onDeletePicture = `subscription OnDeletePicture {
  onDeletePicture {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
