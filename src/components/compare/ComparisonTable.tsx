'use client';

export interface ComparisonFeature {
  feature: string;
  assetStage: string | boolean;
  competitor: string | boolean;
  category?: string;
}

interface ComparisonTableProps {
  competitorName: string;
  features: ComparisonFeature[];
}

export default function ComparisonTable({ competitorName, features }: ComparisonTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="comparison-check">✓</span>
      ) : (
        <span className="comparison-cross">✗</span>
      );
    }
    return <span>{value}</span>;
  };

  // Group features by category if provided
  const groupedFeatures = features.reduce((acc, feature) => {
    const category = feature.category || 'Features';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {} as Record<string, ComparisonFeature[]>);

  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="feature-column">Feature</th>
            <th className="product-column assetstage-column">AssetStage</th>
            <th className="product-column competitor-column">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
            <>
              {Object.keys(groupedFeatures).length > 1 && (
                <tr key={`category-${category}`} className="category-row">
                  <td colSpan={3}>{category}</td>
                </tr>
              )}
              {categoryFeatures.map((item, index) => (
                <tr key={`${category}-${index}`}>
                  <td className="feature-cell">{item.feature}</td>
                  <td className="value-cell assetstage-cell">{renderValue(item.assetStage)}</td>
                  <td className="value-cell competitor-cell">{renderValue(item.competitor)}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
