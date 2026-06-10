import { clsx } from 'clsx';

export default function TableOf19() {
  const rows = Array.from({ length: 20 }, (_, i) => ({
    multiplier: i + 1,
    result: 19 * (i + 1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-6 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">Table of 19</h1>
          <p className="text-yellow-100 text-sm mt-1">Multiplication Chart</p>
        </div>

        {/* Table */}
        <div className="divide-y divide-yellow-100">
          {rows.map(({ multiplier, result }) => (
            <div
              key={multiplier}
              className={clsx(
                'flex items-center justify-between px-8 py-3 transition-colors hover:bg-yellow-50',
                multiplier % 2 === 0 ? 'bg-amber-50' : 'bg-white'
              )}
            >
              <span className="text-gray-600 font-medium text-base w-24">
                19 &times; {multiplier}
              </span>
              <span className="text-yellow-400 text-lg font-light">=</span>
              <span className="text-amber-600 font-extrabold text-xl w-16 text-right">
                {result}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-3 text-center">
          <p className="text-yellow-100 text-xs">19 × 1 to 19 × 20</p>
        </div>
      </div>
    </div>
  );
}
