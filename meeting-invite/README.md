<h4>Meeting Invite Application</h4>
We have used reference from https://www.codementor.io/vijayst/using-firebase-with-redux-for-building-a-react-app-du1086puw
<br />
In this application we have worked on Firebase, Redux and React.
<br />

In our Application root file we have rendered a main component having Provider and passing store in it. We have also linked InviteContainer.  
<br />
In Invite Container we have <b>mapStateToProps</b> by which the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called.
<br />
<b>mapDispatchToProps</b> shows If an object is passed, each function inside it is assumed to be a Redux action creator.
<br />
<b>connect</b> will Connects a React component to a Redux store.
<br />
Invite is our Component That we have bounded to Invite component.
<br />
In our store file we have created Store with rootReducer, empty object and middlewares.
<br />
In <b>actionTypes</b> we have declared our action types.
<br />
<b>addToInvite, getGuestAddedAction</b> and <b>getInvite</b> are our actions.
<br />
<b>rootReducer</b> is our main reducer.
<br />
<b>inviteReducer</b> is our application reducer that is managing state.


<h4>Note: This Explanation is based on my own Understanding. Feel free to update a readme and send me a pull request. I will me happy to merge. Thanks</h4>
