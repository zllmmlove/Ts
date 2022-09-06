import React from "react";
export const SearchPanel = (props) => {
  const { param, setParam, users } = props;
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => {
          setParam({ ...param, name: evt.target.value });
        }}
      />
      <select
        value={param.parsonId}
        onChange={(e) => setParam({ ...param, personId: e.target.value })}
      >
        <option value="">负责人</option>
        {users.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
