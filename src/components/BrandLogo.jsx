// Placeholder: replace with your real logo component or an <Image>.
export default function BrandLogo({ size = 36 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}>
      <span style={{ width: size, height: size, borderRadius: 8, background: '#159e9c', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: size * 0.4 }}>AH</span>
      <span style={{ fontWeight: 600, fontSize: '1rem' }}>Administrative Solutions</span>
    </span>
  );
}
