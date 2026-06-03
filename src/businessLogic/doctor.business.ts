import { Request } from "express";
import { doctorRepository } from "../db/repository";
import { IDoctor } from "../interface";
const { randomUUID } = require('crypto');
import { s3Service } from "../aws/s3";

export class DoctorBusiness {

    async login(req: Request) {

    }
    
    async create(req: Request) : Promise<IDoctor> {
        
        const doctor = this.map(req);
        this.mandatoryValidation(doctor);
        this.fieldValidation(doctor);
        
        if (doctor.logoURL) await s3Service.uploadFile(req.files?.["logo"]?.[0], doctor.logoURL!);
        if (doctor.signatureURL) await s3Service.uploadFile(req.files?.["signature"]?.[0], doctor.signatureURL!);

        return await doctorRepository.create(doctor);
    }

    async update(req: Request) {
        
        const doctor = this.map(req);

        this.fieldValidation(doctor);
        
        doctor.isActive = false;
        doctor.isApproved= false;
        doctor.updateDate = Date.now() as unknown as Date;
        
        if (doctor.logoURL) await s3Service.uploadFile(req.files?.["logo"]?.[0], doctor.logoURL!);
        if (doctor.signatureURL) await s3Service.uploadFile(req.files?.["signature"]?.[0], doctor.signatureURL!);

        return await doctorRepository.update(req.params.id, doctor!);
    }

    async statusUpdate(req: Request) {
        
        await doctorRepository.update(req.params.id, {
            isActive: req.body.isActive,
            isApproved: req.body.isApproved,
            approveRejectBy: req.body.approveBy,
            approveRejectDate: new Date(),
            approveRejectComments: req.body.rejectComments
        });
    }

    async search(searchParams: any): Promise<IDoctor[] | null> {
        const { name, email, mobile, specialization, gender, license_number, 
            pincode, city, state, country,isApproved,isActive } = searchParams;
        return await doctorRepository.findAll({
            where: {
                ...(name && { name }),
                ...(email && { email }),
                ...(mobile && { mobile }),
                ...(specialization && { specialization }),
                ...(gender && { gender }),
                ...(license_number && { licenseNumber: license_number }),
                ...(pincode && { pincode }),
                ...(city && { city }),
                ...(state && { state }),
                ...(country && { country }),
                ...(isApproved && { isApproved }),
                ...(isActive && { isActive }),
            }
        });
    }

    map(req: any): IDoctor { 
        return {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            gender: req.body.gender,
            specialization: req.body.specialization,
            licenseNumber: req.body.licenseNumber,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
            terms: req.body.terms,
            updatedBy: req.body.updatedBy,
            logoURL: req.files?.["logo"]?.[0] ? `${randomUUID()}_${+req.files?.["logo"]?.[0]}` : undefined,
            signatureURL: req.files?.["signature"]?.[0] ? `${randomUUID()}_${+req.files?.["signature"]?.[0]}` : undefined
        };
    }
   
    mandatoryValidation(doctor: IDoctor) {
        
        if (!doctor.name) throw new Error("Doctor name is required");
        if (!doctor.email) throw new Error("Doctor email is required");
        if (!doctor.mobile) throw new Error("Doctor mobile is required");
        if (!doctor.gender) throw new Error("Doctor gender is required");
        if (!doctor.specialization) throw new Error("Doctor specialization is required");
        if (!doctor.licenseNumber) throw new Error("Doctor license number is required");
        if (!doctor.address) throw new Error("Doctor address is required");
        if (!doctor.city) throw new Error("Doctor city is required");
        if (!doctor.state) throw new Error("Doctor state is required");
        if (!doctor.country) throw new Error("Doctor country is required");
        if (!doctor.pincode) throw new Error("Doctor pincode is required");
        if (!doctor.terms) throw new Error("Doctor terms is required");
        if (!doctor.signatureURL) throw new Error("Doctor signatureURL is required");
    }

    fieldValidation(doctor: IDoctor) {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(doctor.email!)) throw new Error("Invalid email format");
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(doctor.mobile!)) throw new Error("Invalid  mobile number");
        const pincodeRegex = /^[1-9]{1}[0-9]{5}$/;
        if (!pincodeRegex.test(doctor.pincode!)) throw new Error("Invalid pincode");
        if (!['M', 'F', 'O'].includes(doctor.gender!)) throw new Error("Invalid gender");
    }
}

export const doctorBusiness = new DoctorBusiness();