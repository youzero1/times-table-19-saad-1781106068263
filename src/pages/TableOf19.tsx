import { clsx } from 'clsx';

export default function TableOf19() {
  const rows = Array.from({ length: 20 }, (_, i) => ({
    multiplier: i + 1,
    result: 19 * (i + 1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-black px-8 py-6 text-center border-b border-gray-700">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">Table 19</h1>
          <p className="text-gray-400 text-sm mt-1">Multiplication Chart</p>
        </div>

        {/* Table */}
        <div className="divide-y divide-gray-800">
          {rows.map(({ multiplier, result }) => (
            <div
              key={multiplier}
              className={clsx(
                'flex items-center justify-between px-8 py-3 transition-colors hover:bg-gray-700',
                multiplier % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
              )}
            >
              <span className="text-gray-300 font-medium text-base w-24">
                19 &times; {multiplier}
              </span>
              <span className="text-gray-500 text-lg font-light">=</span>
              <span className="text-white font-extrabold text-xl w-16 text-right">
                {result}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-black px-8 py-3 text-center border-t border-gray-700">
          <p className="text-gray-500 text-xs">19 × 1 to 19 × 20</p>
        </div>
      </div>
    </div>
  );
}
