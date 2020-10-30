export const income = values =>
  Number(values.wage_income) +
  Number(values.self_employment_income) +
  Number(values.government_benefits) +
  Number(values.bi_weekly_paycheck) +
  Number(values.other_income) +
  Number(values.other_income_2);

export const housing = values =>
  Number(values.rent_mortgage) +
  Number(values.municipal_taxes) +
  Number(values.heat) +
  Number(values.hydro) +
  Number(values.cable_internet) +
  Number(values.phone) +
  Number(values.other_housing);

export const transportation = values =>
  Number(values.car) +
  Number(values.snowmobile) +
  Number(values.transportation_insurance) +
  Number(values.gas) +
  Number(values.parking) +
  Number(values.bicycle) +
  Number(values.public_transport) +
  Number(values.taxi) +
  Number(values.other_transport);

export const living = values =>
  Number(values.food) +
  Number(values.clothing_laundry) +
  Number(values.childcare) +
  Number(values.loan_payment) +
  Number(values.credit_card) +
  Number(values.prescription_drugs) +
  Number(values.pets) +
  Number(values.living_insurance) +
  Number(values.other_living_expenses);

export const personal = values =>
  Number(values.recreation_entertainment) +
  Number(values.eating_out) +
  Number(values.cigarettes_alcohol) +
  Number(values.personal_grooming) +
  Number(values.magazines_newspapers) +
  Number(values.gifts_donations) +
  Number(values.vacation_travel) +
  Number(values.saving_goals);

export const savings = values =>
  Number(values.savings_goal) -
  Number(values.savings_saved);

export const savingsG = values =>
  Number(values.savings_goal);

export const debtO = values =>
  Number(values.debt_owedcc1)+
  Number(values.debt_owedcc2)+
  Number(values.debt_owedhl)+
  Number(values.debt_owedcl);

export const debtP = values =>
  Number(values.debt_paidcc1)+
  Number(values.debt_paidcc2)+
  Number(values.debt_paidcl)+
  Number(values.debt_paidhl);

export const debt = values =>
  Number(values.debt_owedcc1)+
  Number(values.debt_owedcc2)+
  Number(values.debt_owedhl)+
  Number(values.debt_owedcl)-
  Number(values.debt_paidcc1)-
  Number(values.debt_paidcc2)-
  Number(values.debt_paidcl)-
  Number(values.debt_paidhl);

export const totalExpenses = values =>
  housing(values) + transportation(values) + living(values) + personal(values);
