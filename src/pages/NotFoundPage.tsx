import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="hero">
      <h1>Không tìm thấy trang</h1>
      <p>Đường dẫn này không tồn tại hoặc đã được thay đổi.</p>
      <Link className="brand" to="/">
        Quay về trang chủ
      </Link>
    </section>
  );
}
