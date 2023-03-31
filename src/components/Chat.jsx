import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data}=useContext(ChatContext)
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
        <div className="chatIcons">
          <img alt="chat" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAAB+fn48PDzv7++NjY0rKysuLi62trbq6ur5+fmIiIjk5OT8/PwZGRn09PTJyclqamomJibS0tJSUlJvb2/d3d2tra1KSkpgYGB2dnacnJxlZWUMDAw0NDS9vb1DQ0OkpKQ8ZltZAAADiklEQVR4nO2aWZuqMAyGRXEpCHQAWcSN//8nx6EFPTM0KV28OE++u9Gg76Rps9TVikQikUgkEolEIpH8K7vH63n1x48AJNsA0OUDEMcrRPBU7ZuAYQTeGdgNJfDMwHYaBF4ZWKpF4JEh3GsSBMHBE8FGm8ATwwIfeFqLLF9E4MEP4WMhQRDc3RJkzWICC4bwMJOElsXBqPOfz4kPIf7vxrp731BpnCEu0DmALXUDHZGZOXyh9pAfzp8geMaImqD6DEEQVEqE3uv3po/pdOuVCKVPgu75BVxClEqEJXloUNq0l0vb6OzjePiGQvyxcYOwb+uKZVGSRBmr6hbbS3L5b+4QNvdfuzu8w09L89YVQsnnHudQLMmEEbhBSJV5+KCOimY4jzo3CCXQrRzVjih5eFwHThDOyeuBkNd9X/O3sEi0Dlg7hO1kXcSvV+Niehns91wgrEdb/quIaaYIXc8/6QqhHVfg9Pe905gAW58IuVz1YjbyU7kaIVrpWiBIZx9U78vdyv0hfEkfqC2kH768IYhzHuosUzaYYIWHMYJwQgKm9FLLDcYIwss1bFRja2WD0EQ/NhGSlffCCm59TBHEuXiHCcaUCJ+RpggiGNHiTkQDHJCGCNfhWIowgiAY0ljoA6EcFhk9deT5FYHeMkQQ/UeHI3SDIZi0DRFENGqkQZFMwXi0QpjJkL91+v8RNOqyszeEGP/kd9YYMjFEEEkKyRA/GrJEAiYqQ4THUJdp9P/DKZqBEzrTA1qUAjjCYMZAE1OEO77GPxIxA2czUwSx2ZBKYMxm8OY1RbiJlUBKdFHmI1cnxlWTKIjgy6mraDiRjWOMsBNWYKYSOWqF3N6YV9CyTQC2vCzzlY2GNUIqmupEabeRBtjwyaKbkk1tpAjJNhLvoxndpq2V45po9nSIJQFa4VohXMe5Kf8TcLuxu6/wGaDVfOE6TVQO/1SH5TR/CjWmkHZTlvw1aWLdqdzl+a48dWx68ahzh2U5a8rfB34Reyp6e6HQus+1Hvp1yg/QKbCdIASbYv75Qvcaz8UA+DIDUVy0H3czBm9r9jaATFiND7lcIzzVxD0vqqrgfbzwGtMZgrkIgRBwBP2NbamLEkGjW3Mj9U88jp5v7UelwL2OznWGAwF5DhlSuVIZAQir7AObYoP8hmLVL/3lzkLl6ivzlyP4VvGDSgfacswFJBKJRCKRSCQSiYTrGwmGNfDHFqonAAAAAElFTkSuQmCC" />
          <img alt="chat" src="https://www.shutterstock.com/image-vector/add-user-vector-icon-filled-260nw-1144991324.jpg" />
          <img alt="chat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm91vT-fnFCsq1XuTwrEa3fKO5d8LPhmXQaId0xwNeBQ&s" />
        </div>
        </div>
        <Messages />
        <Input />
    </div>
  );
};

export default Chat;
