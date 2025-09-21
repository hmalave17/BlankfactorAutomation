# language: en
# Author: Hernan Malave

Feature: Retirement and Wealth section
  As a Software Development Engineer in Test
  I want to validate the Retirement and Wealth section
  So that I can demonstrate my automation skills
  for the Software Development Engineer in Test role at Blankfactor

  Background: the user opens the URL
    Given user opens the URL

  Scenario: Validate Retirement and Wealth section
    Given user navigates to Industries and opens the Retirement and Wealth section
    When user clicks on the Let's get started button
    Then user verifies the page URL and the title