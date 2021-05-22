/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js';

describe("test pushToHistory", () => {
    test("is settings", () => {
        let currentstate = pushToHistory("settings", 0);
        expect(history.length).toBe(2);
        let objectname = history.state.page;
        expect(objectname).toBe("settings");

    });

    test("is entry", () => {
        let currentstate = pushToHistory("entry", 1);
        expect(history.length).toBe(3);
        let objectname = history.state.page;
        expect(objectname).toBe("entry1");
        
    });

    test("other pages", () => {
        let currentstate = pushToHistory("other", 2);
        expect(history.length).toBe(4);
        let objectname = history.state.page;
        expect(objectname).toBe();
        
    });
    
});