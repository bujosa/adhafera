import { gql } from 'apollo-angular';

export const USER_DATA = gql`
  fragment UserData on User {
    id
    email
    name
    lastName
    telephoneNumber
    address
    profilePicture
    role
  }
`;

export const TRIP_USER_DATA = gql`
  fragment TripUserData on TripsUser {
    id
    email
    name
    lastName
    profilePicture
  }
`;

export const TRIP_DATA = gql`
  fragment TripData on Trip {
    id
    pictures
    title
    ticket
    manager {
      ...TripUserData
    }
    description
    state
    stages {
      id
      description
      title
      price
    }
    price
    startDate
    endDate
  }
  ${TRIP_USER_DATA}
`;

export const APPLICATION_DATA = gql`
  fragment ApplicationData on Application {
    id
    comments
    explorer {
      ...TripUserData
    }
    manager {
      ...TripUserData
    }
    reasonRejected
    state
    trip {
      ...TripData
    }
  }
  ${TRIP_USER_DATA}
  ${TRIP_DATA}
`;
