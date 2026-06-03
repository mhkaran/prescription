set timezone = 'Asia/Kolkata';
-- create
CREATE TABLE if not exists doctor (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar (120) NOT NULL,
  gender char(1) NOT NULL check (gender in ('M','F','O')),
  specialization varchar(150) NOT NULL,
  license_number varchar(100) UNIQUE NOT NULL,
  address text NOT NULL,
  city varchar(30) NOT NULL,
  state varchar(25) NOT NULL,
  country varchar(15) NOT NULL,
  pincode varchar(6) NOT NULL,
  terms text, 
  logo_url varchar(50),
  signature_url varchar(50),
  mobile varchar(15) NOT NULL UNIQUE,
  email varchar(120) NOT NULL,
  is_approved boolean DEFAULT (false),
  is_active boolean DEFAULT (true),
  approve_reject_by varchar(25),
  approve_reject_date timestamp,
  approve_reject_comments varchar(100),
  create_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp with time zone,
  update_by varchar(25)
);

CREATE TABLE if not exists patient (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(120) not null,
  mobile varchar(15) UNIQUE NOT NULL,
  email varchar(120),
  gender char(1) NOT NULL check (gender in ('M','F','O')),
  date_Of_birth date, 
  address text,
  pincode varchar(6),
  create_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp with time zone 
);

CREATE TABLE if not exists doctor_patient (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID not NULL,
  patient_id UUID not NULL,
  CONSTRAINT fk_doctor_patient_doctor FOREIGN KEY(doctor_id) REFERENCES doctor(id),
  CONSTRAINT fk_doctor_patient_patient FOREIGN KEY(patient_id) REFERENCES patient(id),
  CONSTRAINT uq_doctor_patient_doctor_patient UNIQUE (doctor_id, patient_id)
);

Create Table if not exists medicine(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand varchar(50),
  name varchar(150) NOT NULL
);

Create Table if not exists doctor_medicine(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID not NULL,
  name varchar(150),
  brand varchar(50),
  create_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_doctor_medicine_doctor FOREIGN KEY(doctor_id) REFERENCES doctor(id)
);

Create Table if not exists diagnosis_medicine (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID not NULL, 
  medicine_id UUID not NULL,
  name varchar(100),
  usage varchar (50),
  days smallInt,
  dose varchar(20),
  report boolean DEFAULT (false),
  CONSTRAINT fk_diagnosis_medicine_doctor FOREIGN KEY(doctor_id) REFERENCES doctor(id),
  CONSTRAINT fk_diagnosis_medicine_medicine FOREIGN KEY(medicine_id) REFERENCES medicine(id)
);

Create Table if not exists prescribe(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID not NULL,
  patient_id UUID not NULL,
  name varchar(100),
  pic_url varchar(50),
  comment varchar(500),
  create_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP ,
  CONSTRAINT fk_prescribe_doctor FOREIGN KEY(doctor_id) REFERENCES doctor(id),
  CONSTRAINT fk_prescribe_patient FOREIGN KEY(patient_id) REFERENCES patient(id)
);

Create Table if not exists prescribe_medicine(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prescribe_id UUID not null,
  name varchar(100),
  usage varchar (50),
  comment varchar(100),
  days smallInt,
  dose varchar(20),
  report boolean DEFAULT (false),
  CONSTRAINT fk_prescribe_medicine_prescribe FOREIGN KEY (prescribe_id) REFERENCES prescribe(id)
);

Create Table if not exists billing_plan (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(50),
  doctor_id UUID not NULL,
  start_date timestamp with time zone ,
  end_date timestamp with time zone ,
  is_active boolean,
  CONSTRAINT fk_billing_plan_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

Create Table if not exists billing_payment(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID not NULL,
  billing_plan_id UUID not NULL,
  amount numeric(10,2) not NULL,
  tax numeric(10,2) not NULL,
  billable_prescription_record text not NULL,
  non_billable_prescription_record text not NULL,
  payment_reference varchar(200) not NULL,
  create_date timestamp with time zone ,
  payment_date timestamp with time zone ,
  CONSTRAINT fk_billing_payment_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(id),
  CONSTRAINT fk_Billing_payment_billing_plan FOREIGN KEY (billing_plan_id) REFERENCES billing_plan(id)
  
);

Create Table if not exists migration(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_name varchar(200) not Null,
    create_date timestamp with time zone
);

CREATE Table if not exists temporary_password(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    otp varchar(10) NOT Null,
    expriry_date timestamp with time zone,
    is_validate BOOLEAN DEFAULT (false),
    create_date timestamp with time zone
);

CREATE INDEX IF NOT EXISTS idx_prescribe_doctor ON prescribe(doctor_id);
CREATE INDEX IF NOT EXISTS idx_prescribe_patient ON prescribe(patient_id);
CREATE INDEX IF NOT EXISTS idx_prescribe_medicine_prescribe ON prescribe_medicine(prescribe_id);
CREATE INDEX IF NOT EXISTS idx_doctor_patient_doctor ON doctor_patient(doctor_id);
CREATE INDEX IF NOT EXISTS idx_doctor_patient_patient ON doctor_patient(patient_id);
CREATE INDEX IF NOT EXISTS idx_billing_payment_doctor ON billing_payment(doctor_id);
CREATE INDEX IF NOT EXISTS idx_billing_plan_doctor ON billing_plan(doctor_reference_id);
