
import React, { useState, useEffect } from 'react';

const home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hits the base products endpoint to pull down the full mock database
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to retrieve full product catalog');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>Loading Entire Product Catalog...</div>;
    if (error) return <div style={{ textAlign: 'center', color: 'red', padding: '50px' }}>Error loading items: {error}</div>;

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>

            {/* Dynamic Header Counter */}
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Our Full Catalog ({products.length} Products Found)
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
                maxWidth: '1300px',
                margin: '0 auto'
            }}>
                {products.map((product) => {
                    // Fallback image utility clean up
                    let cleanImageUrl = "https://via.placeholder.com/250x200?text=No+Image";
                    if (product.images && product.images.length > 0) {
                        // Some Platzi URL formats come enclosed with brackets or quotes mistakenly depending on seed data
                        cleanImageUrl = product.images[0].replace(/[\[\]"]/g, "");
                    }

                    return (
                        <div
                            key={product.id}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e0e0e0',
                                borderRadius: '4px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px 12px 12px 12px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                        >
                            {/* Wholesale ribbon styled exactly like Screenshot 2026-06-12 075506.jpg */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: '#fff200',
                                color: '#000000',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '4px 8px',
                                borderBottomLeftRadius: '4px',
                                textTransform: 'uppercase'
                            }}>
                                Whole Sale Available
                            </div>

                            {/* API Product Image */}
                            <div style={{ height: '160px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                <img
                                    src={cleanImageUrl}
                                    alt={product.title}
                                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/250x200?text=Image+Unavailable"; }}
                                />
                            </div>

                            {/* Details & Pricing */}
                            <div style={{ textAlign: 'center', margin: '0 0 12px 0', width: '100%' }}>
                                <span style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {product.category?.name || "General"}
                                </span>


                                <h3 style={{
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: '#333333',
                                    margin: '4px 0 6px 0',
                                    height: '38px',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: '1.3'
                                }}>
                                    {product.title}
                                </h3>
                                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#00a896' }}>
                                    ${product.price}
                                </span>
                            </div>

                            {/* Action Button matching the color scheme */}
                            <button style={{
                                width: '100%',
                                backgroundColor: '#ffffff',
                                border: '1px solid #00a896',
                                color: '#00a896',
                                padding: '8px 0',
                                borderRadius: '4px',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                transition: 'all 0.2s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#00a896';
                                    e.currentTarget.style.color = '#ffffff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.color = '#00a896';
                                }}
                                onClick={() => window.open(`https://fakeapi.platzi.com/en/rest/products/${product.id}`, '_blank')}
                            >
                                Explore More <span>▼</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default home;
