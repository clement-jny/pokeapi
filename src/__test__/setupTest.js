import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { server } from "../mocks/server";

expect.extend(matchers);

beforeAll(() => {
	server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => {
	server.close();
});

afterEach(() => {
	cleanup();
	server.resetHandlers();
});