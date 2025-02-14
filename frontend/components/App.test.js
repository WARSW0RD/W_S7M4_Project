import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import translations from "../i18n/index.json"

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText("Create an Account")).toBeVisible()
    })
    test("TEXT_FAV_LANG_JS", () => {
      render(<App lang="en" />)
      expect(screen.getByText("JavaScript")).toBeVisible()
    })
    test("TEXT_FAV_LANG_RUST", () => {
      render(<App lang="en" />)
      expect(screen.getByText("Rust")).toBeVisible()
    })
    test("TEXT_OPT_FAV_FOOD_1", () => {
      render(<App lang="en" />)
      expect(screen.getByText("-- Select favorite food --")).toBeVisible()
    })
    test("TEXT_OPT_FAV_FOOD_2", () => {
      render(<App lang="en" />)
      expect(screen.getByText("Pizza")).toBeVisible()
    })
    test("TEXT_OPT_FAV_FOOD_3", () => {
      render(<App lang="en" />)
      expect(screen.getByText("Spaghetti")).toBeVisible()
    })
    test("TEXT_OPT_FAV_FOOD_4", () => {
      render(<App lang="en" />)
      expect(screen.getByText("Broccoli")).toBeVisible()
    })
    test(("TEXT_SUBMIT"), () => {
      render(<App lang="en"  submitAllowed={true} />)
      expect(screen.getByText(translations.en.TEXT_SUBMIT)).toBeVisibile()
      screen.debug()
    })
    test("TEXT_FAV_LANG",() => {  
      render(<App lang="en"/>)
      expect(screen.getByText("Favorite language:")).toBeVisible()
    })
    test("LABEL_USERNAME", () => {
      render(<App lang="en"/>)
      expect(screen.getByText("Username:")).toBeVisible()
    })
    test("LABEL_FAV_FOOD", () => {
      render(<App lang="en"/>)
      expect(screen.getByText("Favorite food:")).toBeVisible()
    })
    test("LABEL_ACCEPT_TERMS", () => {
      render(<App lang="en"/>)
      expect(screen.getByText("Agree to our terms")).toBeVisible()
    })
   test("PLACEHOLDER_USERNAME", () => {
    render(<App lang="en"/>)
    expect(screen.getByPlaceholderText("Type username")).toBeVisible();
   })
  })
  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
      test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
        render(<App lang="esp" />)
        expect(screen.getByText("Crear Cuenta")).toBeVisible()
      })
      test("TEXT_FAV_LANG_JS", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("JavaScript")).toBeVisible()
      })
      test("TEXT_FAV_LANG_RUST", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("Rust")).toBeVisible()
      })
      test("TEXT_OPT_FAV_FOOD_1", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("-- Elija su plato favorito --")).toBeVisible()
      })
      test("TEXT_OPT_FAV_FOOD_2", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("Pizza")).toBeVisible()
      })
      test("TEXT_OPT_FAV_FOOD_3", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("Espaguetis")).toBeVisible()
      })
      test("TEXT_OPT_FAV_FOOD_4", () => {
        render(<App lang="esp" />)
        expect(screen.getByText("Brócolis")).toBeVisible()
      })
      test(("TEXT_SUBMIT"), () => {
        render(<App lang="esp"  submitAllowed={true}/>)
        expect(screen.getByText("Enviar")).toBeVisibile()
      })
      test("TEXT_FAV_LANG",() => {  
        render(<App lang="esp"/>)
        expect(screen.getByText("Lenguaje favorito:")).toBeVisible()
      })
      test("LABEL_USERNAME", () => {
        render(<App lang="esp"/>)
        expect(screen.getByText("Usuario")).toBeVisible()
      })
      test("LABEL_FAV_FOOD", () => {
        render(<App lang="esp"/>)
        expect(screen.getByText("Plato favorito:")).toBeVisible()
      })
      test("LABEL_ACCEPT_TERMS", () => {
        render(<App lang="esp"/>)
        expect(screen.getByText("Acepto condiciones")).toBeVisible()
      })
     test("PLACEHOLDER_USERNAME", () => {
      render(<App lang="esp"/>)
      expect(screen.getByPlaceholderText("Escriba usuario")).toBeVisible();
     })
  })
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
    /*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
      const obj = {
        abc_1: "data_abc_1",
        abc_2: "data_abc_2",
        xyz_1: "data_xyz_1",
        abc_3: "data_abc_3",
      }

      const expected = [
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"],
      ]
      const expected2 = [
        ["xyz_1", "data_xyz_1"],
      ]

      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expected)
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expected2)
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual([])
    })
  })
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split('_')[0] === keyPrefix)
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}
