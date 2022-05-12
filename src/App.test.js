import {getByTestId, render} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Login from "./Login";

describe("Login component test",()=>{
    it("render input",()=>{
        const {getByTestId}=render(<Login/>);
        const login=getByTestId("login_button");
        expect(login).toBeTruthy();

    });

    it("render div",()=>{
        const {getByTestId} =render(<Login/>);
        const div=getByTestId("form1");
        expect(div).toBeTruthy();
    });

});