const windowMock = {
    scrollTo: jest.fn(),
};

const mockedUsedNavigation = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigation: () => mockedUsedNavigation,
    userLocation: () => mockedUsedLocation,
}));

Object.assign(global, global, windowMock);
