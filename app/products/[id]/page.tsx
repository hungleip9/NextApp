// ProductDetail.tsx
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  const products: Record<
    string,
    { name: string; price: string; color: string }
  > = {
    "1": { name: "iPhone 15", price: "25.000.000đ", color: "Đen" },
    "2": { name: "Samsung Galaxy S23", price: "22.000.000đ", color: "Trắng" },
    "3": { name: "MacBook Pro", price: "45.000.000đ", color: "Xám" },
  };
  const product = id ? products[id] : null;

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      {product ? (
        <>
          <h2>Chi tiết sản phẩm</h2>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Tên:</strong> {product.name}
          </p>
          <p>
            <strong>Giá:</strong> {product.price}
          </p>
          <p>
            <strong>Màu sắc:</strong> {product.color}
          </p>
        </>
      ) : (
        <div>
          <h2>Sản phẩm không tồn tại</h2>
          <p>Không tìm thấy sản phẩm với ID: {id}</p>
          <button onClick={() => window.history.back()}>Quay lại</button>
        </div>
      )}
    </div>
  );
}
