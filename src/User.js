const User = ({ name, age, key }) => {
  return (
    <div key={key}>
      {name} {age}
    </div>
  );
};

// const User = (props) => {
//   return (
//     <div key={props.key}>
//       {props.name} {props.age}
//     </div>
//   );
// };

export default User;
