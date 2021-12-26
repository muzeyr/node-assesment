import { StatusCode } from "../config/error.handler";

/**
 * a kind of response model
 */
export interface RecordModel {
  _id: string;
  key: string;
  counts: Array<number>;
  createdAt: Date;
  value: string;
  totalCount: number;
}

/**
 * a kind of Record data
 */
export interface RecordData {
  key: string;
  createdAt: string;
  totalCount: number;
}

/**
 * a kind of response object
 */
export interface ResponseObject {
  code: StatusCode;
  msg: string;
  records?: Array<RecordData>;
  errors?: any[];
}

/**
 * @description The request payload will include a JSON with 4 fields.
  ● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You
     should filter the data using “createdAt”
  ● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in
     the documents should be between “minCount” and “maxCount”.

Sample: {
  "startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000
}

 */
export interface SearchModel {
  startDate: string;
  endDate: string;
  minCount: number;
  maxCount: number;
}

/**
 * assesment example for response payload ;
 * 
 * {
   "code":0,
   "msg":"Success",
   "records":[
      {
         "key":"TAKwGc6Jr4i8Z487",
         "createdAt":"2017-01-28T01:22:14.398Z",
         "totalCount":2800
      }
   ]
 * 
 * @description Response payload should have 3 main fields.
 * @@description 
 * @param ● “code” is for status of the request. 0 means success. Other values may be used for errors that you define.
 * @param ● “msg” is for description of the code. You can set it to “success” for successful
          requests. For unsuccessful requests, you should use explanatory messages. 
 * @param ● “records” will include all the filtered items according to the request. This array should
          include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document. 
 * @returns 
 */
export const ResponsePayload = ({
	code: StatusCode,
	msg,
	records,
	errors,
}: ResponseObject) => {
	return {
		code: StatusCode,
		msg,
		records,
		errors,
	};
};
