import React from 'react';
import renderer from 'react-test-renderer'
import Login from '../src/Login';

describe('Login', () => {
    describe('Rendering', () => {
        it("renders login screen without crash", () => {
            const login = renderer.create(<Login/>).toJSON();
            expect(login).toMatchSnapshot();
        })
    });
});