import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { useState } from "react";

describe("App", () => {
  test("renders", () => {
    render(<App />);
  });
});