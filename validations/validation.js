const { checkSchema } = require('express-validator');

const bookValidate = checkSchema({
  book_name: {
    exists: {
      errorMessage: "Book name is required."
    },
    isString: {
      errorMessage: "Book name should be string."
    },
    isLength: {
      errorMessage: "Book name should be within 100 characters",
      options: {max: 100}
    }
  },
  author: {
    exists: {
      errorMessage: "Author name is required."
    },
    isString: {
      errorMessage: "Author name should be string."
    },
    isLength: {
      errorMessage: "Author name should be within 100 characters",
      options: {max: 100}
    }
  },
  category: {
    exists: {
      errorMessage: "Category name is required."
    },
    in: {
      options: ['Classics', 'Crime', 'Education', 'Kids', 'Biographies'],
      errorMessage: "Invalid Book Category."
    }
  },
  price: {
    exists: {
      errorMessage: "Price is required."
    },
    isInt: {
      errorMessage: "Price should be an integer."
    }
  }
});

const memberValidate = checkSchema({
  member_name: {
    exists: {
      errorMessage: "Member name is required."
    },
    isString: {
      errorMessage: "Member name must be a string"
    },
    isLength: {
      errorMessage: "Member name must be within 100 characters",
      options:{max:100}
    }
  },
  contact_no: {
    exists: {
      errorMessage: "Contact number is required."
    },
    isString:{
      errorMessage: "Contact number must be a string."
    },
    isLength: {
      errorMessage: "Contact number must be exactly 10 digits.",
      options: {
        max: 10,
        min: 10
      }
    }
  },
  email: {
    exists: {
      errorMessage: "Email address is required."
    },
    isEmail: {
      errorMessage: "Please enter a valid email address."
    }
  }
});

module.exports = { bookValidate, memberValidate };