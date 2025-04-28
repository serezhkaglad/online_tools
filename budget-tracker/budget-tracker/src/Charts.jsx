import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { useContext } from 'react';
import { BudgetContext } from './BudgetAppContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

export function ExpensePieChart() {
  const { transactions } = useContext(BudgetContext);

  const expenseData = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => {
      const category = t.category;
      acc[category] = (acc[category] || 0) + Math.abs(t.amount);
      return acc;
    }, {});

  const chartData = Object.keys(expenseData).map((key) => ({
    name: key,
    value: expenseData[key],
  }));

  if (chartData.length === 0) return <p>No expenses to show.</p>;

  return (
    <PieChart width={400} height={400}>
      <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8" label>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export function IncomeExpenseBarChart() {
  const { transactions } = useContext(BudgetContext);

  const monthly = transactions.reduce((acc, t) => {
    const month = t.date?.slice(0, 7); 
    if (!acc[month]) {
      acc[month] = { income: 0, expense: 0 };
    }
    if (t.type === "income") {
      acc[month].income += t.amount;
    } else {
      acc[month].expense += Math.abs(t.amount);
    }
    return acc;
  }, {});

  const chartData = Object.keys(monthly).map((month) => ({
    month,
    income: monthly[month].income,
    expense: monthly[month].expense,
  }));

  if (chartData.length === 0) return <p>No transactions to show.</p>;

  return (
    <BarChart width={500} height={300} data={chartData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" fill="#82ca9d" />
      <Bar dataKey="expense" fill="#8884d8" />
    </BarChart>
  );
}

export function SavingsLineChart() {
  const { transactions } = useContext(BudgetContext);

  const monthlySavings = transactions.reduce((acc, t) => {
    const month = t.date.slice(0, 7);
    if (!acc[month]) acc[month] = 0;
    acc[month] += t.amount;
    return acc;
  }, {});

  const chartData = Object.keys(monthlySavings).map((month) => ({
    month,
    savings: monthlySavings[month],
  }));

  if (chartData.length === 0) return <p>No transactions to show.</p>;

  return (
    <LineChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
    </LineChart>
  );
}
