import { Photo } from "./Photo/Photo";

export function Aside() {
  return (
    <aside
      style={{
        height: '100%',
        width: '20%',
        backgroundColor: 'blue'
      }}
    >
      <Photo></Photo>
    </aside>
  );
}

