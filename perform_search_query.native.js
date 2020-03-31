import React from 'react';
import { NormalQueries from 'common_queries';











































































































class SingleSearch extends SearchBarExtensions {
  const weak_string_exceptions = {
      "Fatboy Slim": "BABE_GROUP_1AF23B"
  }            

  search (valid_string) {
    try {
      return (NormalQueries[valid_string])
    } catch (e) {
      if (
        e instanceof strings.weak_string_exception
      ) {
        if (
          valid_string in weak_string_exceptions
        ) {
          return (weak_string_exceptions[valid_string]);
        } else {
          e.response.statusCode = 404;
          console.log('Please leave. There\'s no singles for you here.');
          throw e;
        }
      }
      throw e;
    }
  }
}
