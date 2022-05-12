import React from 'react';
import renderer from 'react-test-renderer'
import Mail from '../src/Mail';

jest.mock('@react-navigation/core');

describe('Login', () => {
    describe('Rendering', () => {
        it("renders mail screen without crash", () => {
            const chat = renderer.create(<Mail/>).toJSON();
            expect(chat).toMatchSnapshot();
        })
    });
});